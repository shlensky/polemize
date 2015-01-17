module ApplicationHelper
  def title(page_title = nil)
    if page_title
      content_for(:title, page_title)
    else
      default = 'Аргументы за и против, результаты голосования, интернет голосование, онлайн'
      content_for?(:title) ? content_for(:title) : default
    end
  end

  def meta_description(description = nil)
    if description
      content_for(:description, description)
    else
      default = 'Ресурс с вопросами и результатами, к ним аргументы за и против – позволяющий осознано сделать свой выбор и проголосовать  онлайн.'
      content_for?(:description) ? content_for(:description) : default
    end
  end

  def meta_keywords(keywords = nil)
    if keywords
      content_for(:keywords, keywords)
    else
      default = 'аргументы за, аргументы против, результаты голосования, интернет голосование, онлайн'
      content_for?(:keywords) ? content_for(:keywords) : default
    end
  end

  def sidebar_links
    [
        {name: 'Главная', href: root_path, sref: 'root'}
    ]
  end
end
