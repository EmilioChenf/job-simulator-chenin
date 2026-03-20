const db = require('../config/db');

const getAll = async () => {
  return await db.query('SELECT * FROM resources');
};

const getById = async (id) => {
  return await db.query('SELECT * FROM resources WHERE id = $1', [id]);
};

const create = async (data) => {
  const { campo1, campo2, campo3, campo4, campo5, campo6 } = data;

  return await db.query(
    `INSERT INTO resources (campo1, campo2, campo3, campo4, campo5, campo6)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [campo1, campo2, campo3, campo4, campo5, campo6]
  );
};

const update = async (id, data) => {
  const { campo1, campo2, campo3, campo4, campo5, campo6 } = data;

  return await db.query(
    `UPDATE resources SET campo1=$1, campo2=$2, campo3=$3,
     campo4=$4, campo5=$5, campo6=$6 WHERE id=$7 RETURNING *`,
    [campo1, campo2, campo3, campo4, campo5, campo6, id]
  );
};

const remove = async (id) => {
  return await db.query('DELETE FROM resources WHERE id=$1', [id]);
};

module.exports = { getAll, getById, create, update, remove };