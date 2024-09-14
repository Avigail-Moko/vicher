import { Component } from '@angular/core';
import { NewService } from '../new.service';

@Component({
  selector: 'app-searching-chart',
  templateUrl: './searching-chart.component.html',
  styleUrls: ['./searching-chart.component.scss']
})
export class SearchingChartComponent {
  query = '';
  results: any[] = [];

  constructor(private newService:NewService){}
  // onSearch() {
  //   // בדיקה אם השאילתה ריקה
  //   if (!this.query) {
  //     console.error('שאילתה ריקה');
  //     return;
  //   }
  
  //   // קריאה לשירות החיפוש
  //   this.newService.search(this.query).subscribe(
  //     (data) => (this.results = data),
  //     (error) => {
  //       console.error('שגיאה בקבלת תוצאות החיפוש', error);
  //       alert('נכשלה קבלת תוצאות החיפוש, נסה שוב מאוחר יותר');
  //     }
  //   );
  // }



}
