import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We could not find that reciepe. Please try another one';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(results => previewView.render(results, false))
      .join('');
  }
}

export default new ResultView();
