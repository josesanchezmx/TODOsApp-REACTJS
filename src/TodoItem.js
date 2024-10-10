function TodoItem(props) {
    return(
      <li>
        <sap>V </sap>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
}
export { TodoItem };