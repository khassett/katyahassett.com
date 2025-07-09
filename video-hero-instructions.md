# Video Hero Section Setup Instructions

## Video Requirements

Your video hero section is now ready! Here's what you need to add:

### Video Files Needed

Place these files in your `img/` directory:

1. **hero-video.mp4** - Main video file (MP4 format for best compatibility)
2. **hero-video.webm** - Alternative format for better compression (optional but recommended)
3. **hero-fallback.jpg** - Static image that shows if video fails to load

### Video Specifications

**Recommended video specs:**
- **Duration:** 10-30 seconds (will loop automatically)
- **Resolution:** 1920x1080 (Full HD) minimum
- **Aspect Ratio:** 16:9 or wider
- **File Size:** Keep under 5MB for good loading performance
- **Format:** MP4 (H.264 codec) and WebM (VP9 codec)

### Video Content Suggestions

Since you're a UI/UX designer, consider these video ideas:
- Timelapse of you working on a design
- Smooth animations of your design process
- Subtle abstract motion graphics
- Your workspace/desk setup
- Design tools in action (Figma, Sketch, etc.)

### Current Features

✅ **Responsive design** - Adapts to all screen sizes
✅ **Auto-play with mute** - Follows web standards
✅ **Smooth overlay** - Dark overlay for text readability
✅ **Fallback image** - Shows if video doesn't load
✅ **Call-to-action buttons** - "View My Work" and "About Me"
✅ **Mobile optimized** - Text and buttons adjust for mobile

### Customization Options

You can easily customize:
- **Overlay opacity** - Change the `.video-overlay` background opacity
- **Text color** - Modify `.hero-title` and `.hero-subtitle` colors
- **Button styles** - Update `.btn-primary` and `.btn-secondary` colors
- **Text shadows** - Adjust `text-shadow` properties for better readability

### Performance Tips

- Compress your video files using tools like HandBrake
- Consider using a CDN for video hosting if files are large
- Test loading performance on different devices
- Have a high-quality fallback image ready

### Testing

To test your hero section:
1. Add your video files to the `img/` directory
2. Open your website in a browser
3. Check on mobile devices
4. Test with slow internet connections

The section will automatically fall back to the image if videos don't load.
