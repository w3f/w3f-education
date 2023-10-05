use curl::easy::Easy;
use glob::glob;
use std::fs::{create_dir_all, File};
use std::io::{BufReader, Read, Result, Write};

trait Downloader {
    const COMMIT_HASH: &'static str;
    const RESPOSITORY_NAME: &'static str;
    const BASE_URL: &'static str;

    fn download(file_name: &str, path: &str) -> Result<()>;
}

struct PolkadotSDK;

#[derive(PartialEq)]
struct Source {
    path: String,
    file_name: String,
}

impl Downloader for PolkadotSDK {
    const COMMIT_HASH: &'static str = "0a6dfdf973b8e7b669eda6e2ed202fb3549a20b9";
    const RESPOSITORY_NAME: &'static str = "paritytech/polkadot-sdk";
    const BASE_URL: &'static str = "https://raw.githubusercontent.com";

    /// This function is basically a slightly modded version of this gist: https://gist.github.com/BennyFranco/608765f2d3aee69c207c490045ac093c
    fn download(file_name: &str, path: &str) -> Result<()> {

        let mut dst = Vec::new();
        let mut easy = Easy::new();
        easy.url(&format!(
            "{}/{}/{}/{}/{}",
            Self::BASE_URL,
            Self::RESPOSITORY_NAME,
            Self::COMMIT_HASH,
            path,
            file_name
        ))?;
        let _redirect = easy.follow_location(true);

        {
            let mut transfer = easy.transfer();
            transfer.write_function(|data| {
                dst.extend_from_slice(data);
                Ok(data.len())
            })?;
            transfer.perform()?;
        }

        let full_path = format!("docify/{}/{}", path, file_name);
        create_dir_all(format!("docify/{}/", path))?;
        let mut file = File::create(full_path)?;
        file.write_all(dst.as_slice())?;

        Ok(())
    }
}

fn main() -> Result<()> {
    // First: we need a way to get all relevant files. This is done by getting each doc file with snippets,
    // processing them to view their respective GH links, downloading that file, then using that as a reference

    // After we have all relevant files, _then_ we process each file through compile_markdown, one at a time, into our desired output.
    // https://github.com/paritytech/polkadot-sdk/blob/0a6dfdf973b8e7b669eda6e2ed202fb3549a20b9/substrate/frame/timestamp/src/tests.rs

    let paths = pre_docify();
    for path in paths {
        let split_idx = path.find("src/");
        let source = path.split_at(split_idx.unwrap() + 4);
        PolkadotSDK::download(source.1, source.0)?;
    }
    process();
    Ok(())
}

fn pre_docify() -> Vec<String> {
    let mut paths: Vec<String> = vec![];
    for entry in glob("./test_docs/**/*.md").expect("you suck") {
        let file = File::open(entry.unwrap());
        let mut buff_reader = BufReader::new(file.unwrap());
        let mut buffer = String::new();
        buff_reader.read_to_string(&mut buffer).unwrap();
        for line in buffer.lines() {
            if line.contains("docify") {
                let beginning = line.find("substrate/").unwrap();
                let end = line.find("\",").unwrap();
                let path: &str = &line[beginning..end];

                if !paths.contains(&path.to_string()) {
                    paths.push(path.to_string());
                }
            }
        }
    }
    println!("{:?}", paths);
    paths
}

fn process() {
    #[cfg(all(feature = "with-docify"))]
    docify::compile_markdown!(
        "/Users/bader/Documents/education/w3f-education/docify/readme-generate/test_docs/",
        "/Users/bader/Documents/education/w3f-education/docify/readme-generate/test_docs/output"
    );
}
