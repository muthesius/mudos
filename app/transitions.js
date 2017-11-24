export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('erledigt'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
