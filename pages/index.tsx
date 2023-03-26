import { Layout } from '@layouts/Layout';
import Head from 'next/head';
import { data } from 'utils/data';
import _ from 'lodash';
import { DateFilters } from '@components/DateFilters';
import { ActionButtons } from '@components/ActionButtons';
import { RecogidasContextProvider } from '@context/recogidasContext';
import { ModalRecogidas } from '@components/modals/ModalRecogidas';
import { ModalDespachos } from '@components/modals/ModalDespachos';
import { NextPage } from 'next';
import { useState } from 'react';
import { MdFilterAlt, MdFilterAltOff } from 'react-icons/md';
import { CardLote } from '@components/CardLote';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recogidas y Despachos</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <RecogidasContextProvider>
          <RecogidasDespachos />
        </RecogidasContextProvider>
      </Layout>
    </>
  );
};

const RecogidasDespachos = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  return (
    <div className='h-full w-full flex flex-col gap-2 p-4'>
      <div className='flex justify-center'>
        <h1>Recogidas y despachos</h1>
        <button
          className={`md:hidden logo-dark`}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? <MdFilterAltOff /> : <MdFilterAlt />}
        </button>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between'>
        {showFilters && <DateFilters />}
        <ActionButtons />
      </div>
      <DesktopTable />
      <MobileCards />

      <div>Footer</div>

      <ModalRecogidas />
      <ModalDespachos />
    </div>
  );
};

const DesktopTable = () => {
  const datos = _.groupBy(data, 'Fecha');

  return (
    <div className='hidden h-full flex-col md:flex '>
      <div className='debug flex h-[80vh] justify-center p-6 overflow-y-auto'>
        <table className='block'>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Lote 1</th>
              <th>Lote 2</th>
              <th>Lote 3</th>
              <th>Lote 4</th>
              <th>Lote 5</th>
              <th>Lote 6</th>
              <th>Lote 7</th>
              <th>Lote 8</th>
              <th>Lote 9</th>
              <th>Lote 10</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(datos).map((fecha) => (
              <tr key={`row__${fecha}`}>
                <td>{fecha}</td>
                {datos[fecha].map((lote) => (
                  <td key={`lote__${lote.Lote}`}>{lote.Racimos}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>Paginación</div>
    </div>
  );
};

const MobileCards = () => (
  <div className='grid h-full grid-cols-2 items-center justify-items-center gap-2 sm:grid-cols-4 md:hidden'>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((lote) => (
      <CardLote key={`lote_${lote}`} loteNumero={lote} />
    ))}
  </div>
);

export default Home;
