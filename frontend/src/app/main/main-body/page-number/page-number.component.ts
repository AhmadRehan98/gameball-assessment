import { Component } from '@angular/core';

@Component({
  selector: 'app-page-number',
  template: '',
})
export class PageNumberComponent {

  public static getInnerHTML(num: Number){
    return `<a href="#" class="pagination_number_container"
    style='width: 20px;
      height: 20px;
      flex-direction: column;
      padding: 8px;
      gap: 15px;
      background: #f0f0f0;
      text-decoration:none;
      align-items: center;
      border-radius:50%;
      flex: none;
      order: 0;
      flex-grow: 0;
      font-family: "Inter";
      font-style: normal;
      color: #101828;
      text-align: center;'>${num}
    </a>`
  }
}
