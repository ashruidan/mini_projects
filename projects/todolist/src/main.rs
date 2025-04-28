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
    let mut modified: bool = true;
    match action.as_str() {
        "add"|"create" => {
            content = "- [ ] ".to_owned();
            content.push_str(&action_args);
            list.push(&content);
        },
        "display" | "read" => {
            for (nb, task) in list.iter().enumerate() {
                println!("{} ({})", task, nb);
            }
            modified = false;
        },
        "check" | "update" => {
            let index: usize = action_args.parse().unwrap();
            content = list[index].to_string();
            if content.chars().nth(3) == Some(' ') {
                content.replace_range(3..4,"x");
            } else {
                content.replace_range(3..4," ");
            }
            list[index] = content.as_str();
        },
        "remove" | "delete" => {
            let index: usize = action_args.parse().unwrap();
            list.remove(index);
        },
        "find" | "search" => (),
        _ => (),
    }

    // Save File
    if modified {
        fs::write(file_path, list.join("\n"))
            .expect("Expect list to be written");
    }
}
