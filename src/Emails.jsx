import Email from "./Email"

function Emails(props) {
    const filteredEmails = props.filteredEmails
    const toggleStar = props.toggleStar
    const toggleRead = props.toggleRead

    return (
      <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email key={email.id} index={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar}/>
          ))}
        </ul>
      </main>

    )
}

export default Emails