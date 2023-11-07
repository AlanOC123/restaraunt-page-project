import '../styles/content.css';

const contentModule = (() => {
  const initialRender = () => {
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');
  
    return contentDiv
  }

  const deleteContent = div => {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }

  const renderContent = (module => {
    const mainDiv = document.querySelector('#content');
    deleteContent(mainDiv);
  
    mainDiv.append(module);
  })

  return {
    initialRender,
    deleteContent,
    renderContent
  }
})()

export default contentModule;