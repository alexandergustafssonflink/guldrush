import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
      <h3> Ädelmetaller </h3>
      <ul>
        <a href="/guld">
          <li>Guld</li>
          <ul>
          <li>
        </a>
        <a href="/silver">
          <li>Silver</li>
        </ul>
      </ul>
    </div>
  );
};

export default Menu;
