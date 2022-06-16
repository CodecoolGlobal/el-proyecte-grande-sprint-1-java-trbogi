// imports...

const URL = process.env.REACT_ENV_BACKEND_URL;

const MyComponent = props => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch(URL+"/reservations")
      .then(response => response.json())
      .then(setReservations);
  }, [])

  if (reservations.length === 0) return <h3>Loading...</h3>;

  return <ul>{reservations.map((res, idx) =>
    <li><Reservation key={res.id} data={res} /></li>)}</ul>;

}
