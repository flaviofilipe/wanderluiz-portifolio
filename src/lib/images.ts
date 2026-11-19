import type { ImageMetadata } from 'astro';

/**
 * Carrega automaticamente TODAS as imagens das pastas, sem importar o nome.
 * Basta adicionar/remover arquivos em src/assets/fotos e src/assets/fundos.
 * A ordem segue o nome do arquivo (ex.: 01-..., 02-...).
 */
type Mod = { default: ImageMetadata };

const fotoFiles = import.meta.glob<Mod>(
  '/src/assets/fotos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);
const fundoFiles = import.meta.glob<Mod>(
  '/src/assets/fundos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

const collator = new Intl.Collator('pt-BR', { numeric: true, sensitivity: 'base' });

function toList(files: Record<string, Mod>) {
  return Object.entries(files)
    .sort(([a], [b]) => collator.compare(a, b))
    .map(([path, mod]) => ({
      src: mod.default,
      name: path.split('/').pop()!.replace(/\.[^.]+$/, ''),
    }));
}

export const fotos = toList(fotoFiles);
export const fundos = toList(fundoFiles);

/** Fundo por posição; se faltar, reaproveita os existentes. */
export function fundo(index: number) {
  if (fundos.length === 0) return undefined;
  return fundos[index % fundos.length].src;
}
