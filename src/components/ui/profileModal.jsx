import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export function ProfileModal({ data }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>Mostrar perfil</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader className=" flex flex-col justify-center items-center">
                    <AlertDialogTitle>
                        <picture class="w-20 h-20 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
                            <img
                                src={data?.picture}
                                alt="Profile picture"
                                draggable="false"
                                class="w-full h-full rounded-md"
                            />
                        </picture>
                    </AlertDialogTitle>
                    <AlertDialogDescription className=" flex justify-center flex-col items-center pt-8">
                        <p class="text-4xl font-bold">{data?.full_name}</p>
                        <p class="text-xl">{data?.email}</p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cerrar</AlertDialogCancel>
                    <AlertDialogAction>
                        <a href="/api/auth/signout">
                            <p class="transition-all duration-100 ease-in-out font-normal group-hover:font-bold">
                                Cerrar sesión
                            </p>
                        </a>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
