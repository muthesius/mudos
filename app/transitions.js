export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('erledigt'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.hasClass('task'),

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toValue(true),
    this.use('crossFade', { duration: 500 }),

    // which means we can also apply a reverse rule for transitions to
    // the false state.
    this.reverse('toLeft', { duration: 500 })
  );

}
