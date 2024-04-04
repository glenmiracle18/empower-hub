import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BellIcon,
  BookmarkIcon,
  Cog8ToothIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { auth } from "@clerk/nextjs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { simplifyName } from "@/lib/utils";
import ButtonLink from "../common/button-link";
import { ThemeToggle } from "../common/theme-toggle";

const HeaderFeed: React.FC = async () => {
  const user = session?.user;

  return (
    <div className="flex w-full flex-col gap-4 px-4 sm:p-0">
      <div className="hidden lg:block">
        <h1 className="text-xl font-bold">Inicio</h1>
      </div>
      <div className="flex items-center justify-between lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Avatar>
              <AvatarImage src={user.image} alt="avatar" />
              <AvatarFallback>
                {simplifyName(user.name.toUpperCase())}
              </AvatarFallback>
            </Avatar>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Avatar>
                  <AvatarImage src={user.image} alt="avatar" />
                  <AvatarFallback>
                    {simplifyName(user.name.toUpperCase())}
                  </AvatarFallback>
                </Avatar>
              </SheetTitle>
              <SheetDescription asChild>
                <div className="flex flex-col">
                  <h3 className="font-bold">{user.name}</h3>
                  <p className="text-opacity-50">@{user.name}</p>
                </div>
              </SheetDescription>
            </SheetHeader>
            <SheetClose asChild>
              <ButtonLink
                href="/bookmarks"
                text="Guardados"
                ariaLabel="Guardados"
                variant="ghost"
                className="justify-start hover:bg-gray-200 dark:hover:bg-slate-800 "
                icon={<BookmarkIcon className="order-first mr-4 h-6 w-6" />}
              />
            </SheetClose>
            <SheetClose asChild>
              <ButtonLink
                href="/notifications"
                text="Notificaciones"
                ariaLabel="Notificaciones"
                variant="ghost"
                className="justify-start hover:bg-gray-200 dark:hover:bg-slate-800 "
                icon={<BellIcon className="order-first mr-4 h-6 w-6" />}
              />
            </SheetClose>
            <SheetClose asChild>
              <ThemeToggle />
            </SheetClose>
            <SheetClose asChild>
              <ButtonLink
                href="/settings"
                text="Configuración"
                ariaLabel="Configuración"
                variant="ghost"
                className="justify-start hover:bg-gray-200 dark:hover:bg-slate-800"
                icon={<Cog8ToothIcon className="order-first mr-4 h-6 w-6" />}
              />
            </SheetClose>
            {user.role === "ENTERPRISE" && (
              <ButtonLink
                href={`/${user.name}/submit`}
                text="Publicar oferta"
                ariaLabel="Publicar oferta"
                className="mt-8"
              />
            )}
          </SheetContent>
        </Sheet>
        <BellIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default HeaderFeed;
