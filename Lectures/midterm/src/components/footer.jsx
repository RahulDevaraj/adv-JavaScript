const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  return (
    <footer>
      <p>
        MidTerm Exam {monthName} ,{year}
      </p>

      <p style={{ fontSize: ".8em", fontStyle: "italic" }}>
        Rahul Devarajan Raj
      </p>
    </footer>
  );
};

export default Footer;
