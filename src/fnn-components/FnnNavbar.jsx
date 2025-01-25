// Impor komponen Avatar dari Catalyst untuk menampilkan foto profil
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

// Impor komponen Navbar dari Catalyst untuk membuat bilah navigasi
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from '@/components/navbar';

// Impor ikon Heroicons untuk elemen visual pada navbar
import {
  ArrowRightStartOnRectangleIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';

// Komponen Navbar khusus untuk aplikasi
function FnnNavbar() {
  return (
    <Navbar>
      {/* Spacer untuk memberikan jarak antara elemen navbar */}
      <NavbarSpacer />

      {/* Bagian kanan navbar */}
      <NavbarSection>
        {/* Item pencarian */}
        <NavbarItem href="/search" aria-label="Search">
          <MagnifyingGlassIcon />
        </NavbarItem>

        {/* Item inbox */}
        <NavbarItem href="/inbox" aria-label="Inbox">
          <InboxIcon />
        </NavbarItem>
      </NavbarSection>

      {/* Menu dropdown untuk profil pengguna */}
      <Dropdown>
        {/* Tombol dropdown menggunakan Avatar */}
        <DropdownButton as={NavbarItem}>
          <Avatar src="/assets/images/profile-photo.jpg" />
        </DropdownButton>

        {/* Isi menu dropdown */}
        <DropdownMenu className="min-w-64" anchor="bottom end">
          {/* Profil pengguna */}
          <DropdownItem href="/my-profile">
            <UserIcon />
            <DropdownLabel>My profile</DropdownLabel>
          </DropdownItem>

          {/* Pengaturan */}
          <DropdownItem href="/settings">
            <Cog8ToothIcon />
            <DropdownLabel>Settings</DropdownLabel>
          </DropdownItem>

          {/* Pembatas */}
          <DropdownDivider />

          {/* Kebijakan privasi */}
          <DropdownItem href="/privacy-policy">
            <ShieldCheckIcon />
            <DropdownLabel>Privacy policy</DropdownLabel>
          </DropdownItem>

          {/* Bagikan umpan balik */}
          <DropdownItem href="/share-feedback">
            <LightBulbIcon />
            <DropdownLabel>Share feedback</DropdownLabel>
          </DropdownItem>

          {/* Pembatas */}
          <DropdownDivider />

          {/* Tombol logout */}
          <DropdownItem href="/logout">
            <ArrowRightStartOnRectangleIcon />
            <DropdownLabel>Sign out</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
}

// Ekspor komponen untuk digunakan di tempat lain
export default FnnNavbar;
