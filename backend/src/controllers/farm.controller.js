
const db = require('../config/database');

exports.createFarm = async (req, res) => {
  const { name, id_document, id_address } = req.body;
  const response = await db.query(
    'INSERT INTO "Farm".farms (name, id_document, id_address) VALUES ($1, $2, $3)',
    [name, id_document, id_address],
  );

  res.status(201).send({
    message: 'Farms added successfully!',
    body: {
      product: { pname, id_document, id_address },
    },
  });
};

exports.listAllFarms = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM "Farm".farms ORDER BY name ASC',
  );
  res.status(200).send(response.rows);
};

exports.findFarmById = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const response = await db.query(
    'SELECT * FROM "Farm".farms WHERE id = $1',
    [id],
  );
  res.status(200).send(response.rows);
};

exports.getByName = async (req, res) => {
    const name = parseInt(req.params.name);
    const response = await db.query(
      'SELECT * FROM "Farm".farms WHERE name like $1',
      [name],
    );
    res.status(200).send(response.rows);
  };
  

exports.updateFarmById = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, id_document, id_address } = req.body;

  const response = await db.query(
    'UPDATE "Farm".farms SET name = $1, id_document = $2, id_address = $3 WHERE id = $4',
    [name, id_document, id_address, id],
  );

  res.status(200).send({ message: 'Farm Updated Successfully!' });
};

exports.deleteFarmById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM "Farm".farms WHERE id = $1', [
    id,
  ]);

  res.status(200).send({ message: 'Farm deleted successfully!', id });
};


exports.findFarmByIdDocument = async (req, res) => {
  const id = req.params.id;
  const response = await db.query(
    'SELECT  f.id, f."name", a.id , a.address , a.country , a.state , a.street, d.id, '+
    'd.documentnumber , '+
    'd.documenttype  FROM "Farm".farms f INNER JOIN "Farm".address a ON f.id_address  = a.id '+
    'INNER JOIN "Farm"."document" d ON f.id_document = d.id WHERE d.documentnumber  LIKE $1 LIMIT 1',
    [id],
  );
  res.status(200).send(response.rows);
};


exports.findFarmByNameDocument = async (req, res) => {
  const name = "%"+req.params.name+"%";
  const response = await db.query(
    'SELECT  f.id, f."name", a.id , a.address , a.country , a.state , a.street, d.id, '+
    'd.documentnumber , '+
    'd.documenttype  FROM "Farm".farms f INNER JOIN "Farm".address a ON f.id_address  = a.id '+
    'INNER JOIN "Farm"."document"  d ON f.id_document = d.id WHERE ' +
    `f.name like $1 LIMIT 1`,
    [name],
  );
  res.status(200).send(response.rows);

};

