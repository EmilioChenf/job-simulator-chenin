const model = require('../models/resourceModel');

const validate = (body) => {
  const { campo1, campo2, campo3, campo4, campo5, campo6 } = body;

  if (
    typeof campo1 !== 'string' ||
    typeof campo2 !== 'string' ||
    typeof campo3 !== 'string' ||
    !Number.isInteger(campo4) ||
    typeof campo5 !== 'number' ||
    typeof campo6 !== 'boolean'
  ) {
    return false;
  }

  return true;
};

exports.getAll = async (req, res) => {
  try {
    const result = await model.getAll();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const result = await model.getById(req.params.id);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

exports.create = async (req, res) => {
  try {
    if (!validate(req.body)) {
      return res.status(400).json({ error: 'Invalid data types' });
    }

    const result = await model.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

exports.update = async (req, res) => {
  try {
    if (!validate(req.body)) {
      return res.status(400).json({ error: 'Invalid data types' });
    }

    const result = await model.update(req.params.id, req.body);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

exports.delete = async (req, res) => {
  try {
    await model.remove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};