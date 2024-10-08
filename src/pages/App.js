import React, { useState } from 'react';
import gitlogo from '../assets/logo.svg';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/Input/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

function App() {
    const [currentRepo, setCurrentRepo] = useState('');
    const [repos, setRepos] = useState([]);
    const githubProfileUrl = 'https://github.com/RuiJ72?tab=repositories'; // Your GitHub profile URL

    const handleSearchRepo = async () => {
        console.log("Fetching repository for:", currentRepo); // Log currentRepo
        try {
            // Fetch the repository from GitHub API
            const { data } = await api.get(`repos/${currentRepo}`);
            console.log("Data fetched:", data); // Log the fetched data
            if (data.id) {
                setRepos((prev) => [
                    ...prev,
                    { name: data.name, url: data.html_url, profileUrl: githubProfileUrl } // Include profileUrl here
                ]);
            }
        } catch (error) {
            console.error("Error fetching the repository:", error); // Log errors
        }
    };

    return (
        <Container>
            <img src={gitlogo} width={72} height={72} alt="GitHub Logo" />
            <Input 
                value={currentRepo} 
                onChange={(e) => setCurrentRepo(e.target.value)} 
                placeholder="Enter repo (e.g., RuiJ72/my-repo)" 
            />
            <Button onClick={handleSearchRepo} />
            {repos.map((repo) => (
                <ItemRepo key={repo.name} repo={repo} />
            ))}
        </Container>
    );
}

export default App;
