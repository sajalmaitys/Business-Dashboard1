import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  LayoutGrid,
  ShoppingCart,
  BarChart2,
  Building2,
  BookOpen,
  User,
  Store,
  FileText,
  MessageSquare,
  Calendar,
  Languages,
  Mail,
  MessageCircle,
  FolderKanban,
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  badge?: string | number;
}

const SidebarItem = ({
  icon,
  label,
  href,
  active = false,
  badge,
}: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${active ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
    >
      <div className="text-muted-foreground">{icon}</div>
      <span className="text-sm">{label}</span>
      {badge && (
        <span className="ml-auto bg-destructive text-destructive-foreground text-xs rounded-full px-2 py-0.5">
          {badge}
        </span>
      )}
    </Link>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-xs font-semibold text-muted-foreground px-3 py-2">
        {title}
      </h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="h-full w-60 border-r bg-background flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pritam" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Pritam Sensei</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
      <Separator />
      <ScrollArea className="flex-1 px-3 py-2">
        <SidebarSection title="GENERAL">
          <SidebarItem
            icon={<LayoutGrid size={18} />}
            label="App"
            href="/app"
          />
          <SidebarItem
            icon={<ShoppingCart size={18} />}
            label="E-commerce"
            href="/e-commerce"
          />
          <SidebarItem
            icon={<BarChart2 size={18} />}
            label="Analytics"
            href="/analytics"
            active={true}
          />
          <SidebarItem
            icon={<Building2 size={18} />}
            label="Banking"
            href="/banking"
          />
          <SidebarItem
            icon={<BookOpen size={18} />}
            label="Booking"
            href="/booking"
          />
          <SidebarItem
            icon={<FileText size={18} />}
            label="File"
            href="/file"
          />
        </SidebarSection>

        <SidebarSection title="MANAGEMENT">
          <SidebarItem icon={<User size={18} />} label="User" href="/user" />
          <SidebarItem
            icon={<Store size={18} />}
            label="E-Commerce"
            href="/e-commerce-management"
          />
          <SidebarItem
            icon={<FileText size={18} />}
            label="Invoices"
            href="/invoices"
          />
          <SidebarItem
            icon={<MessageSquare size={18} />}
            label="Blog"
            href="/blog"
          />
          <SidebarItem
            icon={<FolderKanban size={18} />}
            label="File manager"
            href="/file-manager"
          />
        </SidebarSection>

        <SidebarSection title="APPS">
          <SidebarItem
            icon={<Mail size={18} />}
            label="Mail"
            href="/mail"
            badge="25+"
          />
          <SidebarItem
            icon={<MessageCircle size={18} />}
            label="Chat"
            href="/chat"
          />
          <SidebarItem
            icon={<Calendar size={18} />}
            label="Calendar"
            href="/calendar"
          />
          <SidebarItem
            icon={<Languages size={18} />}
            label="Kanban"
            href="/kanban"
          />
        </SidebarSection>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
