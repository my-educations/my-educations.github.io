function greet()
{
    let name = document.querySelector('#contact-name').value;
    if (name === '')
    {
        name = 'Sir/Madam';
    }
    alert('Hi ' + name + ', we\'ll contact you soon!');
}