// core
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  /**
   *
   */
  transform(text: string, search: string): string {
    if (!search) {
      return text;
    }
    text = text.toString();
    search = search.trim();
    let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    pattern = pattern.split(' ').filter(t => t.length > 0).join('|');
    const regex = new RegExp(pattern, 'gi');
    return search ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`) : text;
  }

}
