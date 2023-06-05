const axios = require('axios');

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

// Example usage:
createTask('Example task', 'This is an example task created from GitHub')
  .then(() => {
    console.log('Asana task created successfully!');
  })
  .catch((error) => {
    console.error('Error creating Asana task:', error);
    process.exit(1);
  });
