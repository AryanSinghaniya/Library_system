import axios from 'axios';

const testSignup = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/v1/auth/register', {
            name: 'Test User',
            email: 'test@example.com',
            password: 'testpassword123'
        });
        
        console.log('Signup successful:', response.data);
    } catch (error) {
        console.error('Signup failed:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
    }
};

testSignup();
