<script>
document.querySelectorAll('.product-link').forEach(link => {
 link.addEventListener('click', e => {
 e.preventDefault();
 // ...
 });
});
const footer = document.querySelector('footer');
const scrollDistance = footer.offsetTop + footer.offsetHeight;
document.addEventListener('scroll', () => {
 const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
 if (currentScrollPosition > scrollDistance) {
 footer.classList.add('hidden');
 } else {
 footer.classList.remove('hidden');
 }
 if (currentScrollPosition === 0) {
 footer.classList.remove('hidden');
 }
});
</script>