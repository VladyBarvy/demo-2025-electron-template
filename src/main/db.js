import { Client } from 'pg';

export default async () => {
  const client = new Client({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: '5432',
    database: 'demodb',
  });

  await client.connect();
  return client;
};


// import { Client } from 'pg';

// const connectionDataBase = async () => {
//   const client = new Client({
//     user: 'postgres',
//     password: '1234',     // изменить на свой пароль
//     host: '172.28.32.1',  // изменить на свой localhost
//     port: '5432',
//     database: 'shoesdb',
//   });

//   await client.connect();
//   return client;
// };

// export default connectionDataBase;
