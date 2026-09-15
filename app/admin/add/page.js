export const dynamic = 'force-dynamic';
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const res = await fetch('/api/packages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, capacity, price, description, features }),
    });

    const data = await res.json();

    if (!res.ok) {
      // This will show the exact database/server error on your screen
      alert("Error: " + (data.error || "Failed to add package"));
    } else {
      alert("Package added successfully!");
      // Clear your form fields here if needed
    }
  } catch (err) {
    alert("Network error: " + err.message);
  }
};
