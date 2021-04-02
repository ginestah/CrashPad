import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          className="home-image"
          alt=""
          src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80"
        />
        <h1>Made for and by climbers</h1>
      </div>
      <main className="main-content">
        <p>
          CrashPad is built for climbers and adventurers to find a place to stay
          when traveling around the country. Built around the idea of couch
          surfing all use is through user negotiating and users are free to
          charge or trade depending on personal preference
          <br />
          <br />
          To get started you can search for a location in the search bar, to
          start hosting you must create an account.
        </p>
      </main>
    </div>
  );
}
