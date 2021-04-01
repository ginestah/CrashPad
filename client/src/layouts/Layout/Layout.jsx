import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout(props) {
  return (
    <div>
      <Header currentUser={props.currentUser} />
      {props.children}
      <Footer
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
    </div>
  );
}
