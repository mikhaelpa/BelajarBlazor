import swal from 'sweetalert';

export async function hello(name: string) {
    await swal({
        title: 'Hello ' + name,
        text: 'This message is brought to you by instapack + Blazor',
        icon: "success",
    });

    return 'Antono';
}
