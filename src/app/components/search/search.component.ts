import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm:string = '';

  articals=[
    {
      title:'Understanding the difference between grid-template and grid-auto',
      date:'Oct 09, 2018',
      desc:'With all the new properties related to CSS Grid Layout, One of the distinctions that alwayes confused was the diffrence between the grid-template-* and the grid-auto-*'
    },
    {
      title:'Understanding the difference between grid-template and grid-auto',
      date:'Oct 09, 2018',
      desc:'With all the new properties related to CSS Grid Layout, One of the distinctions that alwayes confused was the diffrence between the grid-template-* and the grid-auto-*'
    },
    {
      title:'Understanding the difference between grid-template and grid-auto',
      date:'Oct 09, 2018',
      desc:'With all the new properties related to CSS Grid Layout, One of the distinctions that alwayes confused was the diffrence between the grid-template-* and the grid-auto-*'
    },
    {
      title:'Understanding the difference between grid-template and grid-auto',
      date:'Oct 09, 2018',
      desc:'With all the new properties related to CSS Grid Layout, One of the distinctions that alwayes confused was the diffrence between the grid-template-* and the grid-auto-*'
    },
    {
      title:'Understanding the difference between grid-template and grid-auto',
      date:'Oct 09, 2018',
      desc:'With all the new properties related to CSS Grid Layout, One of the distinctions that alwayes confused was the diffrence between the grid-template-* and the grid-auto-*'
    }
  ];

  highlightText(text:string, search:string):string {
    if(search.length === 0){
      return text;
    }
    let lowerText = text.toLowerCase();
    let lowerSearch = search.toLowerCase();
    let index = lowerText.indexOf(lowerSearch);
    if(index === -1){
      return text;
    }
    let results = [];
    let wordArr = text.split(' ');
    for(let word of wordArr){
      if(word.toLowerCase().includes(lowerSearch)){
        let targetTextWithoutSearch = word.toLowerCase().split(lowerSearch);
        let highlightedTrgetWord = targetTextWithoutSearch.join(`<span class="highlight">${search}</span>`)
        results.push(highlightedTrgetWord)
      }
      else{
        results.push(word);
      }
    }
    return results.join(' ');
  }
}
