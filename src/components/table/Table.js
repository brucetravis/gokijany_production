import React, { useState } from 'react'
import './Table.css'
import { motion } from 'framer-motion'
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Table() {

    const careerItems = [
        { id: 1, text: 'Solar Energy', link: 'https://web.talanta.ai/search?query=Solar+Energy&country=', category: 'Renewable Energy', location: 'Kenya, Global' },
        { id: 2, text: 'Wind Energy', link: 'https://web.talanta.ai/search?query=Wind+Energy&country=', category: 'Renewable Energy', location: 'Kenya, Global' },
        { id: 3, text: 'Hydro Power', link: 'https://web.talanta.ai/search?query=Hydro+Power&country=', category: 'Renewable Energy', location: 'Kenya, Global' },
        { id: 4, text: 'Geothermal', link: 'https://web.talanta.ai/search?query=Geothermal&country=', category: 'Renewable Energy', location: 'Kenya, Global' },
        // Starting from id 5 onward — converted link values
        { id: 5, text: 'Energy Storage', link: 'https://web.talanta.ai/search?query=Energy+Storage&country=', category: 'Energy & Storage', location: 'Kenya, Global' },
        { id: 6, text: 'Battery Storage', link: 'https://web.talanta.ai/search?query=Battery+Storage&country=', category: 'Energy & Storage', location: 'Kenya, Global' },
        { id: 7, text: 'Electric vehicles', link: 'https://web.talanta.ai/search?query=Electric+vehicles&country=', category: 'Green Mobility', location: 'Kenya, Global' },
        { id: 8, text: 'Charging Infrastructure', link: 'https://web.talanta.ai/search?query=Charging+Infrastructure&country=', category: 'Green Mobility', location: 'Kenya, Global' },
        { id: 9, text: 'Organic farming', link: 'https://web.talanta.ai/search?query=Organic+farming&country=', category: 'Sustainable Agriculture', location: 'Kenya, Global' },
        { id: 10, text: 'Sustainable Fisheries', link: 'https://web.talanta.ai/search?query=Sustainable+Fisheries&country=', category: 'Sustainable Agriculture', location: 'Kenya, Global' },
        { id: 11, text: 'Precision Farming', link: 'https://web.talanta.ai/search?query=Precision+Farming&country=', category: 'Sustainable Agriculture', location: 'Kenya, Global' },
        { id: 12, text: 'Regenerative Agriculture', link: 'https://web.talanta.ai/search?query=Regenerative+Agriculture&country=', category: 'Sustainable Agriculture', location: 'Kenya, Global' },
        { id: 13, text: 'Agri Tech', link: 'https://web.talanta.ai/search?query=Agri+Tech&country=', category: 'Sustainable Agriculture', location: 'Kenya, Global' },
        { id: 14, text: 'Aquaculture', link: 'https://web.talanta.ai/search?query=Aquaculture&country=', category: 'Sustainable Agriculture', location: 'Kenya, Global' },
        { id: 15, text: 'Food waste management', link: 'https://web.talanta.ai/search?query=Food+waste+management&country=', category: 'Sustainable Agriculture', location: 'Kenya, Global' },
        { id: 16, text: 'Climate Policy & Advocacy', link: 'https://web.talanta.ai/search?query=Climate+Policy+&+Advocacy&country=', category: 'Climate Governance', location: 'Kenya, Global' },
        { id: 17, text: 'Data Science', link: 'https://web.talanta.ai/search?query=Data+Science&country=', category: 'Climate Governance', location: 'Kenya, Global' },
        { id: 18, text: 'Conservation', link: 'https://web.talanta.ai/search?query=Conservation&country=', category: 'Conservation & Biodiversity', location: 'Kenya, Global' },
        { id: 19, text: 'Biodiversity', link: 'https://web.talanta.ai/search?query=Biodiversity&country=', category: 'Conservation & Biodiversity', location: 'Kenya, Global' },
        { id: 20, text: 'Carbon Offsetting', link: 'https://web.talanta.ai/search?query=Carbon+Offsetting&country=', category: 'Climate Governance', location: 'Kenya, Global' },
        { id: 21, text: 'Climate Risk Assessment', link: 'https://web.talanta.ai/search?query=Climate+Risk+Assessment&country=', category: 'Climate Governance', location: 'Kenya, Global' },
        { id: 22, text: 'Environmental Research', link: 'https://web.talanta.ai/search?query=Environmental+Research&country=', category: 'Climate Governance', location: 'Kenya, Global' },
        { id: 23, text: 'Carbon Accounting', link: 'https://web.talanta.ai/search?query=Carbon+Accounting&country=', category: 'Climate Finance & Reporting', location: 'Kenya, Global' },
        { id: 24, text: 'Green Bonds', link: 'https://web.talanta.ai/search?query=Green+Bonds&country=', category: 'Climate Finance & Reporting', location: 'Kenya, Global' },
        { id: 25, text: 'ESG Consulting', link: 'https://web.talanta.ai/search?query=ESG+Consulting&country=', category: 'Climate Finance & Reporting', location: 'Kenya, Global' },
        { id: 26, text: 'Sustainable Supply Chain Management', link: 'https://web.talanta.ai/search?query=Sustainable+Supply+Chain+Management&country=', category: 'Sustainable Business', location: 'Kenya, Global' },
        { id: 27, text: 'Corporate Social Responsibility', link: 'https://web.talanta.ai/search?query=Corporate+Social+Responsibility&country=', category: 'Sustainable Business', location: 'Kenya, Global' },
        { id: 28, text: 'Climate Risk & Compliance', link: 'https://web.talanta.ai/search?query=Climate+Risk+%26+Compliance&country=', category: 'Climate Governance', location: 'Kenya, Global' },
        { id: 29, text: 'Sustainable Packaging', link: 'https://web.talanta.ai/search?query=Sustainable+Packaging&country=', category: 'Waste Management & Circular Economy', location: 'Kenya, Global' },
        { id: 30, text: 'Recycling', link: 'https://web.talanta.ai/search?query=Recycling&country=', category: 'Waste Management & Circular Economy', location: 'Kenya, Global' },
        { id: 31, text: 'Upcycling', link: 'https://web.talanta.ai/search?query=Upcycling&country=', category: 'Waste Management & Circular Economy', location: 'Kenya, Global' },
        { id: 32, text: 'Zero Waste Initiatives', link: 'https://web.talanta.ai/search?query=Zero+Waste+Initiatives&country=', category: 'Waste Management & Circular Economy', location: 'Kenya, Global' },
        { id: 33, text: 'E-waste Management', link: 'https://web.talanta.ai/search?query=E-waste+Management&country=', category: 'Waste Management & Circular Economy', location: 'Kenya, Global' },
        { id: 34, text: 'Circular Economy Strategy', link: 'https://web.talanta.ai/search?query=Circular+Economy+Strategy&country=', category: 'Waste Management & Circular Economy', location: 'Kenya, Global' },
        { id: 35, text: 'Sustainable Architecture', link: 'https://web.talanta.ai/search?query=Sustainable+Architecture&country=', category: 'Green Infrastructure', location: 'Kenya, Global' },
        { id: 36, text: 'Smart Cities', link: 'https://web.talanta.ai/search?query=Smart+Cities&country=', category: 'Green Infrastructure', location: 'Kenya, Global' },
        { id: 37, text: 'Sustainable Transport', link: 'https://web.talanta.ai/search?query=Sustainable+Transport&country=', category: 'Green Mobility', location: 'Kenya, Global' },
        { id: 38, text: 'Urban Planning', link: 'https://web.talanta.ai/search?query=Urban+Planning&country=', category: 'Green Infrastructure', location: 'Kenya, Global' },
        { id: 39, text: 'Green Building Certifications', link: 'https://web.talanta.ai/search?query=Green+Building+Certifications&country=', category: 'Green Infrastructure', location: 'Kenya, Global' },
        { id: 40, text: 'Water & Sanitation', link: 'https://web.talanta.ai/search?query=Water+%26+Sanitation&country=', category: 'Sustainable Resources', location: 'Kenya, Global' },
        { id: 41, text: 'Eco-friendly Materials', link: 'https://web.talanta.ai/search?query=Eco-friendly+Materials&country=', category: 'Sustainable Resources', location: 'Kenya, Global' },
        { id: 42, text: 'Suitable water Management', link: 'https://web.talanta.ai/search?query=Suitable+water+Management&country=', category: 'Sustainable Resources', location: 'Kenya, Global' },
        { id: 43, text: 'Reforestation', link: 'https://web.talanta.ai/search?query=Reforestation&country=', category: 'Land & Forest Restoration', location: 'Kenya, Global' },
        { id: 44, text: 'Afforestation', link: 'https://web.talanta.ai/search?query=Afforestation&country=', category: 'Land & Forest Restoration', location: 'Kenya, Global' },
        { id: 45, text: 'Land Restoration', link: 'https://web.talanta.ai/search?query=Land+Restoration&country=', category: 'Land & Forest Restoration', location: 'Kenya, Global' },
        { id: 46, text: 'Sustainable Mining', link: 'https://web.talanta.ai/search?query=Sustainable+Mining&country=', category: 'Green Extraction', location: 'Kenya, Global' },
        { id: 47, text: 'Resource Extraction', link: 'https://web.talanta.ai/search?query=Resource+Extraction&country=', category: 'Green Extraction', location: 'Kenya, Global' },
        { id: 48, text: 'Eco-Tourism', link: 'https://web.talanta.ai/search?query=Eco-Tourism&country=', category: 'Green Entrepreneurship', location: 'Kenya, Global' },
        { id: 49, text: 'Green start Ups', link: 'https://web.talanta.ai/search?query=Green+start+Ups&country=', category: 'Green Entrepreneurship', location: 'Kenya, Global' },
        { id: 50, text: 'Green Incubators', link: 'https://web.talanta.ai/search?query=Green+Incubators&country=', category: 'Green Entrepreneurship', location: 'Kenya, Global' },
        { id: 51, text: 'Eco-Entrepreneurship', link: 'https://web.talanta.ai/search?query=Eco-Entrepreneurship&country=', category: 'Green Entrepreneurship', location: 'Kenya, Global' },
        { id: 52, text: 'Social Impact values', link: 'https://web.talanta.ai/search?query=Social+Impact+values&country=', category: 'Green Entrepreneurship', location: 'Kenya, Global' },
        { id: 53, text: 'Circular Economy Business Values', link: 'https://web.talanta.ai/search?query=Circular+Economy+Business+Values&country=', category: 'Waste Management & Circular Economy', location: 'Kenya, Global' },
        { id: 54, text: 'Sustainable Fashion', link: 'https://web.talanta.ai/search?query=Sustainable+Fashion&country=', category: 'Green Entrepreneurship', location: 'Kenya, Global' },
        { id: 55, text: 'Ethical Brands', link: 'https://web.talanta.ai/search?query=Ethical+Brands&country=', category: 'Green Entrepreneurship', location: 'Kenya, Global' },
        { id: 56, text: 'Climate Tech', link: 'https://web.talanta.ai/search?query=Climate+Tech&country=', category: 'Green Technology', location: 'Kenya, Global' },
        { id: 57, text: 'AI for Sustainability', link: 'https://web.talanta.ai/search?query=AI+for+Sustainability&country=', category: 'Green Technology', location: 'Kenya, Global' }
    ];

    // state to ahndle and update the search term
    const [ searchTerm, setSearchTerm ] = useState(" ") //initial state is an empty string for flexbility
    // state to handle and update the filtering logic
    const [ filteredResults, setFilteredResults ] = useState(careerItems) // initial state is the original array of objects


    // function to handle the search logic
    const handleSearch = (e) => {

        // Destructure to obtain the input value
        const { value } = e.target

        // get the search term and convert It to lower case
        const term = value.toLowerCase().trim()
        
        // Update the state with the latest search term
        setSearchTerm(term)

        // If the search term is an empty string meaning (No results)
        if (term === "") {
            // Update the filteredResults state with all the results
            setFilteredResults(careerItems)
        } else {
            // function to filter the results
            const results = careerItems.filter((career) =>
                career.text.toLowerCase().includes(term) ||
                career.category.toLowerCase().includes(term) ||
                career.location.toLowerCase().includes(term)
            )
            // Update the filteredResults state with the latest filtered results
            setFilteredResults(results)
        }
    }

    // useNavigate() to move to a different route or code within your site
    const navigate = useNavigate()


    //  function to handle when a user clicks one of the rows to navigate to the jobs
    const handleRowClick = (link) => {

        // if the link starts with 'http'
        if (link.startsWith('http')) {
            // Navigate to the link in a new tab (_blank)
            window.open(link, '_blank')
        } else {
            // Otherwise navigate to the link within the browser
            navigate(link)
        }
    }

    
  return (
    <motion.div
        initial={{ x: "100px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='career-table-container'
    >
        <h4 className='mb-4'>All Careers</h4>
        <div className='career-table-header d-flex align-items-center justify-content-between mb-4'>
        <div className='career-table-logo d-flex align-items-center justify-content-center gap-2'>
            <img src={require('../../data/images/goky-logo.webp')} alt='Gokijany Logo'/>
            <h2 className='career-table-title'>Careers</h2>
        </div>
        <div className='career-search-container position-relative'>
            <input 
                type='text'
                placeholder='Career'
                value={searchTerm}
                onChange={handleSearch}
                className='career-search-input form-control'
            />
            <Search style={{ fontSize: '30px', color: 'rgb(38, 192, 38)' }} className='search-icon' />
        </div>
        </div>
        <div className='career-table-container-content'>
        <table className='career-table '>
            <thead className='table-dark'>
            <tr>
                <th>No</th>
                <th>Career</th>
                <th>Category</th>
                <th>location</th>
            </tr>
            </thead>
            <tbody className='table-dark'>
            {filteredResults.length > 0 ? (
                filteredResults.map((career) => (
                <motion.tr
                    key={career.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className=''
                    onClick={() => handleRowClick(career.link)}
                >
                    <td className='career-id'>{career.id}</td>
                    <td className='career-text' data-label="Job Title">{career.text}</td>
                    <td className='career-category'>{career.category}</td>
                    <td className='career-location'>{career.location}</td>
                    {/* <td>{career.id}</td> */}
                </motion.tr>
                ))
            ): (
                <p>No Results Found.</p>
            )}
            </tbody>
        </table>
        </div>
    </motion.div>
  )
}
