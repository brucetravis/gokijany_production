import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import EventsHeader from "./components/eventsHeader/EventsHeader";
import Popular from "./components/popular/Popular";
import "./Events.css";
import { db } from "../../configs/firebase";
import { onValue, ref } from "firebase/database";
import AllEvents from "./components/allEvents/AllEvents";
import Categories from "./components/categories/Categories";
import Preloader from "../../components/common/preloader/Preloader";

export default function Events() {
  let limit = 3;
  const [selectedCategory, setSelectedCategory] = useState("All events");
  const [categories, setCategories] = useState(["All events"]);
  const [events, setEvents] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);
  const [eventsNearby, setEventsNearby] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const isFetched = useRef(false);

  const getEvents = useCallback(() => {
    setLoading(true);
    const eventsRef = ref(db, "events");

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const eventList = Object.values(data);

        setEvents(eventList);
        setPopularEvents(eventList.filter((e) => e.isPopular));
        setCategories([
          "All events",
          ...new Set(eventList.map((e) => e.category)),
        ]);
        setHasMore(eventList.length >= limit);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = getEvents();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isFetched.current) {
      isFetched.current = true;
      getEvents();
    }
  }, [getEvents]);

  const filteredEvents = useMemo(
    () =>
      selectedCategory === "All events"
        ? events
        : events.filter((event) => event.category === selectedCategory),
    [events, selectedCategory]
  );

  if (loading) return <Preloader />;

  return (
    <main id="events">
      <div className="content">
        <EventsHeader />
        <Popular popularEvents={popularEvents} />
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AllEvents
          events={filteredEvents}
          selectedCategory={selectedCategory}
        />
      </div>
    </main>
  );
}
