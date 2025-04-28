use std::env;
use std::fs;

fn main() {
    // Argument Parsing : ./todolist file action args
    let args: Vec<String> = env::args().collect();
    let file_path = &args[1];
    let action = &args[2];
    let action_args = &args[3];

    // Load File
    let file_content = fs::read_to_string(&file_path)
        .expect("Expect file to be read");
    let mut list: Vec<&str> = file_content.lines().collect();

    // Execute Action
    let mut content: String;
    match action.as_str() {
        "create" => {
            content = "- [ ] ".to_owned();
            content.push_str(&action_args);
            list.push(&content)},
        _ => (),
    }

    // Save File
    fs::write(file_path, list.join("\n"))
        .expect("Expect list to be written");
}
