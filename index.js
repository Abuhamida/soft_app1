const express = require('express');
const supabase = require('./supabase');
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Create Category
app.post('/create_category', async (req, res) => {
    const { name, description } = req.body;
    const { data, error } = await supabase
        .from('categories')
        .insert([{ name, description }]);

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(201).json({ message: 'Category created successfully', data });
});

// 2. Get All Categories
app.get('/get_all_categories', async (req, res) => {
    const { data, error } = await supabase
        .from('categories')
        .select('*');

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ data });
});

// 3. Update Category
app.put('/update_category/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const { data, error } = await supabase
        .from('categories')
        .update({ name, description })
        .eq('id', id);

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ message: 'Category updated successfully', data });
});

// 4. Get Category By ID
app.get('/get_category_by_id/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('id', id);

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ data });
});

// 5. Delete Category By ID
app.delete('/delete_category_by_id/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ message: 'Category deleted successfully', data });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});