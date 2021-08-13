import fs from 'mz/fs';
// import prism from 'prismjs';
// import 'prism-svelte';



export async function get () {
    return await fs.readdir('src/snippets')
        .then(async files => {
                return Promise.resolve(files
                .sort()
                .map(async filename => {
                    const file = await fs.readFile(`src/snippets/${filename}`, 'utf-8');
                    const result = {
                        name: filename,
                        data: file
                    };
                    // console.log(result)
                    return result;
                }))
            }
        ).then((result) => {
            console.log(Promise.resolve(result));
            return {body: JSON.stringify(result)}
        });

    // console.log(snippets);

    // let snippets = [];
    // fs.readdir('src/snippets', (err, files) => {
    //     console.log(files.length);
    //     files.map(filename => {
    //         const name = filename.replace(/\.svelte/,'').replace(/-/, ' ');
    //         console.log(filename);
    //         fs.readFile(`src/snippets/${filename}`, {encoding: 'utf-8'}, (err, data) => {
    //             // console.log(data);
    //             snippets.push({
    //                 name: name,
    //                 code: data
    //             });
    //         });
    //     })
    //     return { body: JSON.stringify(snippets) }
    // })





    // return await fs.readdir('src/snippets')
    //     .then(files =>
    //         files.map(filename => {
    //             const name = filename.replace(/\.svelte/,'').replace(/-/, ' ');
    //             const code = fs.readFile(`src/snippets/${filename}`, 'utf-8');
    //             Promise.resolve(code).then(code => {
    //                 console.log(code);
    //                 console.log(name)
    //                 return {
    //                     name: name,
    //                     code: code
    //                 }
    //                 })
    //                 .then(code => {
    //                     return {
    //                         name: name,
    //                         code: prism.highlight(code, prism.languages.html)
    //                     }
    //                 }
    //                 )
    //             return Promise.all([code])
    //                 .then(code => ({
    //                     name,
    //                     code: prism.highlight(code, prism.languages.svelte, 'svelte')
    //                 }))
    //             return {name: name};
    //         })
    //     )
    //     .then(data => Promise.all(data))
    //     .then(data => {
    //         return {snippets: data}
    //     })
}
