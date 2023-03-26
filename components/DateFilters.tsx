const DateFilters = () => {
  return (
    <div className='flex flex-col gap-2 md:flex-row'>
      <label htmlFor='date-from'>
        <span>Desde</span>
        <input type='date' name='date-from' />
      </label>
      <label htmlFor='date-to'>
        <span>Hasta</span>
        <input type='date' name='date-to' />
      </label>
    </div>
  );
};
export { DateFilters };
