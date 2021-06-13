import { Circle } from 'better-react-spinkit';

const Loading = () => {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src='https://i.pinimg.com/564x/db/27/38/db273810ef023194fe9299d456ce5b4d.jpg'
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color='#3cbc28' size={60} />
      </div>
    </center>
  );
};

export default Loading;
