export const changeCssVariables = (theme) => {
  //выборка тем
  /**jdoc
   * cssVariables имяУникальное
   */
  const root = document.querySelector(':root'); //доступ к переменным в root...в index.css
  const cssVariables = ['header', 'bgimage'];

  cssVariables.forEach(e => {
    root.style.setProperty(`--theme-default-${e}`, `var(--theme-${theme}-${e})`);
  });

};
