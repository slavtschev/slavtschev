import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/components/ReloadLink";

interface ProjectCardProps {
  title: string;
  description: string;
  hoverText: string;
  link?: string;
  image?: string;
}

export function ProjectCard({
  title,
  description,
  hoverText,
  link = "#",
  image,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={link}>
      <motion.article
        className="group relative bg-card rounded-xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Area */}
        <div className="aspect-[4/3] bg-muted relative overflow-hidden">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          )}
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-foreground/90 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-background text-sm leading-relaxed text-center">
              {hoverText}
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </motion.article>
    </Link>
  );
}
