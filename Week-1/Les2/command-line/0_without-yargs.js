const yargs = require("yargs");
console.log(yargs.argv);


yargs.command({
    command: "add",
    describe: "adding an element",
    builder: {
        title: {
            describe: "Note title",
            demandOption: false
        }
    },
    handler: (argv) => {
        console.log("adding an element", argv.title);
    }
});

yargs.command({
    command: "remove",
    describe: "removing an element",
    handler: () => {
        console.log("removing an element");
    }
});

yargs.parse();