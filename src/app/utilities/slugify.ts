// export default function(str: string) {

// export class Slugify {

    export function slugify(str: string): string {

    str = str.replace(/^\s+|\s+$/g, ''); // trim

    str = str.toLowerCase();

    let from = 'àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;';
    let to   = 'aaaaeeeeiiiioooouuuuncescrzyuudtn------';


    for (let i = 0, l = str.length ; i < l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace('.', '-') // replace a dot by a dash
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by a dash
        .replace(/-+/g, '-') // collapse dashes
        .replace( /\//g, '' ); // collapse all forward-slashes

    return str;
}


// }


