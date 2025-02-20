// Impor komponen Sidebar dari Catalyst untuk struktur sidebar
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/sidebar';

// Impor komponen Avatar dari Catalyst untuk menampilkan profil pengguna
import { Avatar } from '@/components/avatar';

// Impor komponen Dropdown dari Catalyst untuk menu dropdown
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown';

// Impor ikon Heroicons untuk elemen visual pada sidebar
import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import {
  HomeIcon,
  RectangleStackIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  InboxArrowDownIcon,
} from '@heroicons/react/20/solid';

// Impor data pengumuman dari file JSON
import announcements from '@/data/announcements.json';

// Komponen Sidebar khusus untuk aplikasi
function FnnSidebar() {
  return (
    <Sidebar className="group">
      {/* Header Sidebar */}
      <SidebarHeader>
        {/* Bagian navigasi utama di header */}
        <SidebarSection className="max-lg:hidden">
          <SidebarItem href="/search">
            <MagnifyingGlassIcon />
            <SidebarLabel>Search</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/inbox">
            <InboxIcon />
            <SidebarLabel>Inbox</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>

      {/* Body Sidebar */}
      <SidebarBody>
        {/* Menu utama */}
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/">
            <RectangleStackIcon />
            <SidebarLabel>To do&apos;s</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <InboxArrowDownIcon />
            <SidebarLabel>Leads</SidebarLabel>
          </SidebarItem>
        </SidebarSection>

        {/* Spacer untuk pemisah visual */}
        <SidebarSpacer />

        {/* Bagian pengumuman */}
        <SidebarSection>
          <div className="flex flex-row items-center justify-between">
            <SidebarHeading>Announcements</SidebarHeading>
            <span className="mb-1 hidden text-xs/6 text-zinc-500 hover:underline group-hover:block dark:text-zinc-400">
              <a href="/announcements">See more</a>
            </span>
          </div>
          {announcements.slice(0, 3).map((item) => (
            <SidebarItem key={item.id} href={item.url}>
              <span className="font-normal">{item.title}</span>
            </SidebarItem>
          ))}
        </SidebarSection>

        {/* Spacer untuk pemisah visual */}
        <SidebarSpacer />

        {/* Menu dukungan dan changelog */}
        <SidebarSection>
          <SidebarItem href="/support">
            <QuestionMarkCircleIcon />
            <SidebarLabel>Support</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/changelog">
            <SparklesIcon />
            <SidebarLabel>Changelog</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>

      {/* Footer Sidebar */}
      <SidebarFooter className="max-lg:hidden">
        {/* Menu dropdown profil pengguna */}
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <span className="flex min-w-0 items-center gap-3">
              <Avatar
                src="/assets/images/profile-photo.jpg"
                className="size-10"
                alt=""
              />
              <span className="min-w-0">
                <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                  Finan Akbar
                </span>
                <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                  finan@finan.id
                </span>
              </span>
            </span>
            <ChevronUpIcon />
          </DropdownButton>

          {/* Menu dropdown pilihan */}
          <DropdownMenu className="min-w-64" anchor="top start">
            <DropdownItem href="/my-profile">
              <UserIcon />
              <DropdownLabel>My profile</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/settings">
              <Cog8ToothIcon />
              <DropdownLabel>Settings</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/privacy-policy">
              <ShieldCheckIcon />
              <DropdownLabel>Privacy policy</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/share-feedback">
              <LightBulbIcon />
              <DropdownLabel>Share feedback</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/logout">
              <ArrowRightStartOnRectangleIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SidebarFooter>
    </Sidebar>
  );
}

// Ekspor komponen untuk digunakan di tempat lain
export default FnnSidebar;
