const axios = require('axios');
const fs = require('fs');

const asanaApiKey = process.env.ASANA_API_KEY;
const asanaProjectId = process.env.ASANA_PROJECT_ID;

async function createTask(title, description) {
  const response = await axios.post(
    `https://app.asana.com/api/1.0/projects/${asanaProjectId}/tasks`,
    {
      data: {
        name: title,
        notes: description,
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${asanaApiKey}`,
      },
    }
  );

  return response.data.data;
}

// Add logic here to handle different GitHub events (e.g., pull requests, issues)

// Example usage:
createTask('Example task', 'This is an example task created from GitHub');

