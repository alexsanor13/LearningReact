/* ------------ No funciona pq es back-end -------------*/

const fs = require('fs')

const readAllContacts = () => {
    let output = fs.readFileSync('contacts.txt','utf8')
        .trim()
        .split(/\r?\n|\r/g)
        .map(line => line.split('  '))
        .reduce((contacts, line) => {
            let newContact = {
                name: line[0],
                number: Number(line[1])
            }
            contacts.push(newContact)
            return contacts
        }, [])
        return output;
}

const createContact = (contact) => {
    let contacts = readAllContacts();
    contacts.push(contact);
    let input = contacts
                .map(c => c.name + '  ' + c.number)
                .join('\n');

    fs.writeFileSync('contacts.txt', input); 

    return contact;
}
