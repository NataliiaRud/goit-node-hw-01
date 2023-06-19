const contacts = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);

      return console.log(oneContact);

    case "add":
      const newContact = await contacts.add({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const removeContactById = await contacts.removeContact(id);
      return console.log(removeContactById);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// program
//   .option("-a, --action, <type>")
//   .option("-i, --id, <type>")
//   .option("-t, --name, <type>")
//   .option("-e, --email, <type>")
//   .option("-ph, --phone, <type>");

// program.parse();

// const options = program.opts();
// invokeAction(options);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });
