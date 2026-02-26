import Image from "next/image";
import { Clock, Link2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ service }) {
    
  const { name, description, price, img, duration } = service || {};
  return (
    <div className="hover:animate-pulse group relative bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-zinc-200 dark:border-zinc-800">
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-zinc-900 px-4 py-1 rounded-full text-sm font-semibold shadow">
          ${price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
          {name}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
          {description.replace(/<[^>]+>/g, "")}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 pt-2">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{duration} mins</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-600 font-medium">
            <Sparkles size={16} />
            <span>Premium Protection</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={`/services/${service?._id}`}>
          <button className="w-full mt-4 bg-black text-white dark:bg-white dark:text-black py-3 rounded-xl font-medium hover:opacity-90 transition">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
