document.onreadystatechange = () =>
{
if (document.readyState === 'complete')
{
document.getElementById("loader").remove();
document.getElementById("Content").removeAttribute('id');
}
};