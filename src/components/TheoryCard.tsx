'use client'

import { useState } from 'react'

interface Theory {
  id: string
  title: string
  description: string
  content: any
}

interface TheoryCardProps {
  theory: Theory
  isExpanded: boolean
  onRead: () => void
  isRead: boolean
}

export default function TheoryCard({ theory, isExpanded, onRead, isRead }: TheoryCardProps) {
  const [hasBeenRead, setHasBeenRead] = useState(false)

  const handleMarkAsRead = () => {
    if (!hasBeenRead) {
      setHasBeenRead(true)
      onRead()
    }
  }

  const renderAuthorityDevelopmentContent = (content: any) => {
    return (
      <div className="space-y-6">
        {/* Introduction */}
        {content.introduction && (
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-semibold text-blue-800 mb-2">{content.introduction.title}</h4>
            <p className="text-blue-700 mb-2">{content.introduction.description}</p>
            <p className="text-blue-600 italic text-sm">{content.introduction.keyInsight}</p>
          </div>
        )}

        {/* Five Components */}
        {content.fiveComponents && (
          <div className="space-y-6">
            <h4 className="font-semibold text-gray-800 text-lg">🔑 Vijf Componenten voor Gezagsontwikkeling</h4>
            {content.fiveComponents.map((component: any, index: number) => (
              <div key={index} className="bg-white border rounded-lg p-6">
                <h5 className="font-semibold text-purple-700 mb-3 text-lg">{component.name}</h5>
                <p className="text-gray-700 mb-3">{component.description}</p>
                
                {component.keyPrinciple && (
                  <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400 mb-4">
                    <p className="text-purple-800 font-medium text-sm">
                      🎯 <strong>Kernprincipe:</strong> {component.keyPrinciple}
                    </p>
                  </div>
                )}

                {component.characteristics && (
                  <div className="mb-4">
                    <h6 className="font-medium text-gray-800 mb-2">Kenmerken:</h6>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {component.characteristics.map((char: string, charIndex: number) => (
                        <li key={charIndex}>• {char}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {component.sportExample && (
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-400 mb-4">
                    <h6 className="font-medium text-green-800 mb-2">🏆 Sportvoorbeeld: {component.sportExample.example}</h6>
                    <p className="text-green-700 text-sm mb-2">{component.sportExample.explanation}</p>
                    <p className="text-green-600 text-sm italic">
                      <strong>Les:</strong> {component.sportExample.lesson}
                    </p>
                  </div>
                )}

                {component.quote && (
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400 mb-4">
                    <p className="text-yellow-700 text-sm italic">"{component.quote}"</p>
                  </div>
                )}

                {component.practicalTips && (
                  <div className="bg-gray-50 p-3 rounded">
                    <h6 className="font-medium text-gray-800 mb-2">💡 Praktische Tips:</h6>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {component.practicalTips.map((tip: string, tipIndex: number) => (
                        <li key={tipIndex}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Continuous Development */}
        {content.continuousDevelopment && (
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h4 className="font-semibold text-orange-800 mb-2">🔄 {content.continuousDevelopment.title}</h4>
            <p className="text-orange-700 mb-3">{content.continuousDevelopment.description}</p>
            <ul className="text-orange-600 text-sm space-y-1">
              {content.continuousDevelopment.components.map((comp: string, index: number) => (
                <li key={index}>• {comp}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Practical Application */}
        {content.practicalApplication && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">🎯 {content.practicalApplication.title}</h4>
            <p className="text-gray-700 mb-3">{content.practicalApplication.analysis}</p>
            <ol className="text-gray-600 text-sm space-y-1">
              {content.practicalApplication.steps.map((step: string, index: number) => (
                <li key={index}>{index + 1}. {step}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Key Insights */}
        {content.keyInsights && (
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Belangrijkste Inzichten</h4>
            <ul className="text-yellow-700 space-y-1">
              {content.keyInsights.map((insight: string, index: number) => (
                <li key={index}>• {insight}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Sport Application */}
        {content.sportApplication && (
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="font-semibold text-green-800 mb-2">🏆 Toepassing in Sport</h4>
            <p className="text-green-700">{content.sportApplication}</p>
          </div>
        )}
      </div>
    )
  }

  const renderVanVugtContent = (content: any) => {
    return (
      <div className="space-y-6">
        {/* Introduction */}
        {content.introduction && (
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-semibold text-blue-800 mb-2">{content.introduction.title}</h4>
            <p className="text-blue-700 mb-2">{content.introduction.description}</p>
            {content.introduction.contextualNote && (
              <p className="text-blue-600 italic text-sm">{content.introduction.contextualNote}</p>
            )}
          </div>
        )}

        {/* Five Comparisons */}
        {content.fiveComparisons && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 text-lg">🔍 Vijf Vergelijkingsdimensies</h4>
            {content.fiveComparisons.map((comparison: any, index: number) => (
              <div key={index} className="bg-white border rounded-lg p-4">
                <h5 className="font-semibold text-purple-700 mb-3">{comparison.dimension}</h5>
                
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <h6 className="font-medium text-green-800 mb-1">👑 Gezag</h6>
                    <p className="text-green-700 text-sm">{comparison.authority}</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                    <h6 className="font-medium text-red-800 mb-1">⚡ Dominantie</h6>
                    <p className="text-red-700 text-sm">{comparison.dominance}</p>
                  </div>
                </div>

                {comparison.nuance && (
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <h6 className="font-medium text-yellow-800 mb-1">⚖️ Nuance</h6>
                    <p className="text-yellow-700 text-sm">{comparison.nuance}</p>
                  </div>
                )}

                {comparison.explanation && (
                  <div className="bg-gray-50 p-3 rounded mt-3">
                    <p className="text-gray-700 text-sm">{comparison.explanation}</p>
                  </div>
                )}

                {comparison.examples && (
                  <div className="mt-3 space-y-2">
                    <h6 className="font-medium text-gray-800">Voorbeelden:</h6>
                    {Object.entries(comparison.examples).map(([key, value]: [string, any]) => (
                      <div key={key} className="bg-blue-50 p-2 rounded text-sm">
                        <span className="font-medium text-blue-800 capitalize">{key}:</span>
                        <span className="text-blue-700 ml-1">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Real World Examples */}
        {content.realWorldExamples && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 text-lg">🌍 {content.realWorldExamples.title}</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Mandela */}
              {content.realWorldExamples.mandela && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">{content.realWorldExamples.mandela.name}</h5>
                  <p className="text-green-700 text-sm mb-3">{content.realWorldExamples.mandela.description}</p>
                  <ul className="text-green-600 text-sm space-y-1">
                    {content.realWorldExamples.mandela.characteristics.map((char: string, index: number) => (
                      <li key={index}>• {char}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bokito */}
              {content.realWorldExamples.bokito && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">{content.realWorldExamples.bokito.name}</h5>
                  <p className="text-red-700 text-sm mb-3">{content.realWorldExamples.bokito.description}</p>
                  <ul className="text-red-600 text-sm space-y-1">
                    {content.realWorldExamples.bokito.characteristics.map((char: string, index: number) => (
                      <li key={index}>• {char}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Biden */}
            {content.realWorldExamples.biden && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-800 mb-2">{content.realWorldExamples.biden.name}</h5>
                <p className="text-blue-700 text-sm mb-3">{content.realWorldExamples.biden.description}</p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <h6 className="font-medium text-blue-800 mb-1">Gezag Aspecten:</h6>
                    <ul className="text-blue-600 text-sm space-y-1">
                      {content.realWorldExamples.biden.authorityAspects.map((aspect: string, index: number) => (
                        <li key={index}>• {aspect}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-blue-800 mb-1">Complexiteiten:</h6>
                    <ul className="text-blue-600 text-sm space-y-1">
                      {content.realWorldExamples.biden.complexities.map((complexity: string, index: number) => (
                        <li key={index}>• {complexity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Trump */}
            {content.realWorldExamples.trump && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-orange-800 mb-2">{content.realWorldExamples.trump.name}</h5>
                <p className="text-orange-700 text-sm mb-3">{content.realWorldExamples.trump.description}</p>
                
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <h6 className="font-medium text-red-800 mb-1">Dominantie Aspecten:</h6>
                    <ul className="text-red-600 text-sm space-y-1">
                      {content.realWorldExamples.trump.dominanceAspects.map((aspect: string, index: number) => (
                        <li key={index}>• {aspect}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-green-800 mb-1">Gezag Aspecten:</h6>
                    <ul className="text-green-600 text-sm space-y-1">
                      {content.realWorldExamples.trump.authorityAspects.map((aspect: string, index: number) => (
                        <li key={index}>• {aspect}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-yellow-700 text-sm">
                    <strong>Nuance:</strong> {content.realWorldExamples.trump.nuance}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cultural Context */}
        {content.culturalContext && (
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-semibold text-purple-800 mb-2">🌐 {content.culturalContext.title}</h4>
            <p className="text-purple-700 mb-2">{content.culturalContext.description}</p>
            <p className="text-purple-600 text-sm mb-2">
              <strong>Voorbeeld:</strong> {content.culturalContext.example}
            </p>
            <p className="text-purple-600 text-sm">
              <strong>Nederlandse Context:</strong> {content.culturalContext.dutchContext}
            </p>
          </div>
        )}

        {/* Practical Application */}
        {content.practicalApplication && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">🎯 {content.practicalApplication.title}</h4>
            <p className="text-gray-700 mb-3">{content.practicalApplication.analysis}</p>
            <ol className="text-gray-600 text-sm space-y-1">
              {content.practicalApplication.steps.map((step: string, index: number) => (
                <li key={index}>{index + 1}. {step}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Key Insights */}
        {content.keyInsights && (
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Belangrijkste Inzichten</h4>
            <ul className="text-yellow-700 space-y-1">
              {content.keyInsights.map((insight: string, index: number) => (
                <li key={index}>• {insight}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Sport Application */}
        {content.sportApplication && (
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="font-semibold text-green-800 mb-2">🏆 Toepassing in Sport</h4>
            <p className="text-green-700">{content.sportApplication}</p>
          </div>
        )}
      </div>
    )
  }

  const renderContent = () => {
    const content = theory.content

    // Special handling for Authority Development theory
    if (theory.id === 'authority-development') {
      return renderAuthorityDevelopmentContent(content)
    }

    // Special handling for Van Vugt & Wiltschut theory
    if (theory.id === 'van-vugt-wiltschut') {
      return renderVanVugtContent(content)
    }

    // Handle different content structures based on theory type
    switch (theory.id) {
      case 'mintzberg':
        return (
          <div className="space-y-6">
            {content.categories?.map((category: any, index: number) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-blue-700">{category.name}</h4>
                <div className="grid gap-3">
                  {category.roles?.map((role: any, roleIndex: number) => (
                    <div key={roleIndex} className="bg-white p-3 rounded border-l-4 border-blue-400">
                      <h5 className="font-medium text-gray-800">{role.name}</h5>
                      <p className="text-gray-600 text-sm">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {content.sportExample && (
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">🏆 Sportvoorbeeld</h4>
                <p className="text-green-700">{content.sportExample}</p>
              </div>
            )}
          </div>
        )

      case 'hersey-blanchard':
        return (
          <div className="space-y-6">
            {content.introduction && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">{content.introduction.title}</h4>
                <p className="text-blue-700 mb-2">{content.introduction.description}</p>
                <p className="text-blue-600 font-medium italic">{content.introduction.keyInsight}</p>
              </div>
            )}

            {content.coreModel && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">{content.coreModel.title}</h4>
                <p className="text-gray-700 mb-3">{content.coreModel.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {content.coreModel.dimensions?.map((dimension: any, index: number) => (
                    <div key={index} className="bg-white p-3 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">{dimension.name}</h5>
                      <p className="text-gray-600 text-sm mb-2">{dimension.description}</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {dimension.characteristics?.map((char: string, charIndex: number) => (
                          <li key={charIndex}>• {char}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.developmentLevels && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Ontwikkelingsniveaus</h4>
                {content.developmentLevels.map((level: any, index: number) => (
                  <div key={index} className="bg-white border rounded-lg p-4">
                    <h5 className="font-semibold text-purple-700 mb-2">{level.level}</h5>
                    <div className="grid md:grid-cols-2 gap-2 mb-3">
                      <div><span className="font-medium">Competentie:</span> {level.competence}</div>
                      <div><span className="font-medium">Betrokkenheid:</span> {level.commitment}</div>
                    </div>
                    <div className="mb-3">
                      <h6 className="font-medium mb-1">Kenmerken:</h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {level.characteristics?.map((char: string, charIndex: number) => (
                          <li key={charIndex}>• {char}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3">
                      <h6 className="font-medium mb-1">Behoeften:</h6>
                      <p className="text-sm text-gray-600">{level.needs}</p>
                    </div>
                    {level.sportExample && (
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                        <h6 className="font-medium text-green-800 mb-1">🏆 Sportvoorbeeld</h6>
                        <p className="text-green-700 text-sm">{level.sportExample}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {content.leadershipStyles && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Leiderschapsstijlen</h4>
                {content.leadershipStyles.map((style: any, index: number) => (
                  <div key={index} className="bg-white border rounded-lg p-4">
                    <h5 className="font-semibold text-orange-700 mb-2">{style.style}</h5>
                    <div className="mb-3">
                      <span className="font-medium">Gedrag:</span> {style.behavior}
                    </div>
                    <div className="mb-3">
                      <span className="font-medium">Wanneer:</span> {style.when}
                    </div>
                    <p className="text-gray-600 mb-3">{style.description}</p>
                    <div className="mb-3">
                      <h6 className="font-medium mb-1">Aanpak:</h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {style.approach?.map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    {style.sportExample && (
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                        <h6 className="font-medium text-green-800 mb-1">🏆 Sportvoorbeeld</h6>
                        <p className="text-green-700 text-sm">{style.sportExample}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {content.keyPrinciples && (
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">🔑 Kernprincipes</h4>
                <ul className="text-yellow-700 space-y-1">
                  {content.keyPrinciples.map((principle: string, index: number) => (
                    <li key={index}>• {principle}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )

      default:
        // Generic content renderer for other theories
        return (
          <div className="space-y-6">
            {Object.entries(content).map(([key, value]: [string, any]) => {
              if (typeof value === 'string') {
                return (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                    <p className="text-gray-700">{value}</p>
                  </div>
                )
              }
              
              if (Array.isArray(value)) {
                return (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                    <div className="space-y-2">
                      {value.map((item: any, index: number) => (
                        <div key={index} className="bg-white p-3 rounded border">
                          {typeof item === 'string' ? (
                            <p className="text-gray-700">{item}</p>
                          ) : (
                            <div>
                              {item.name && <h5 className="font-medium text-gray-800 mb-1">{item.name}</h5>}
                              {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                              {item.sportExample && (
                                <div className="bg-green-50 p-2 rounded mt-2 border-l-4 border-green-400">
                                  <p className="text-green-700 text-sm">🏆 {item.sportExample}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }

              if (typeof value === 'object' && value !== null) {
                return (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                    <div className="space-y-2">
                      {Object.entries(value).map(([subKey, subValue]: [string, any]) => (
                        <div key={subKey} className="bg-white p-3 rounded border">
                          <h5 className="font-medium text-gray-800 mb-1 capitalize">{subKey.replace(/([A-Z])/g, ' $1')}</h5>
                          {typeof subValue === 'string' ? (
                            <p className="text-gray-600 text-sm">{subValue}</p>
                          ) : Array.isArray(subValue) ? (
                            <ul className="text-gray-600 text-sm space-y-1">
                              {subValue.map((item: any, index: number) => (
                                <li key={index}>• {typeof item === 'string' ? item : item.description || JSON.stringify(item)}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600 text-sm">{JSON.stringify(subValue)}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }

              return null
            })}
          </div>
        )
    }
  }

  if (!isExpanded) {
    return (
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer relative">
        {isRead && (
          <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            ✓
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{theory.title}</h3>
        <p className="text-gray-600 mb-4">{theory.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-medium">Klik om te lezen →</span>
          {!isRead && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              +50 punten
            </span>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{theory.title}</h2>
        {!isRead && !hasBeenRead && (
          <button
            onClick={handleMarkAsRead}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            ✓ Markeer als gelezen (+50 punten)
          </button>
        )}
        {(isRead || hasBeenRead) && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
            ✓ Gelezen
          </div>
        )}
      </div>
      
      <p className="text-gray-600 mb-6 text-lg">{theory.description}</p>
      
      <div className="prose max-w-none">
        {renderContent()}
      </div>
    </div>
  )
}